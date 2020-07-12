from sklearn.metrics.pairwise import sigmoid_kernel
from sklearn.feature_extraction.text import TfidfVectorizer
#from ..be_vegan import wsgi
#from .be_vegan import wsgi
from be_vegan.wsgi import *
from django_pandas.io import read_frame
import pandas as pd
import numpy as np
from veggies.models import Recipe
import os
import sys



def give_rec(id):
    qs = Recipe.objects.all()
    dataset = read_frame(qs)

    tfv = TfidfVectorizer(min_df=0.01,  max_features=None,
                strip_accents='unicode', analyzer='word',token_pattern=r'\w{1,}',
                ngram_range=(1, 7), use_idf=1,smooth_idf=1,sublinear_tf=1,
                stop_words = 'english')

    dataset['recipe_decription'] = dataset['recipe_decription'].fillna('')
    tfv_matrix = tfv.fit_transform(dataset['recipe_decription'])

    sig = sigmoid_kernel(tfv_matrix, tfv_matrix)
    indices = pd.Series(dataset.index, index=dataset['id'])

    idx = indices[id]
    sig_scores = list(enumerate(sig[idx]))
    sig_scores = sorted(sig_scores, key=lambda x: x[1], reverse=True)
    sig_scores = sig_scores[1:13]
    recipe_indices = [i[0] for i in sig_scores]
    return dataset['id'].iloc[recipe_indices]
