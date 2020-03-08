class MongoDBRouter:
    #def db_for_read(self, model, **hints):
    #    if model._meta.app_label == 'veggies':
    #        return 'posts'
    #    return 'default'

    #def db_for_write(self, model, **hints):
    #    if model._meta.app_label == 'veggies':
    #        return 'posts'
    #    return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        #if obj1._meta.app_label == 'post_data' or obj2._meta.app_label == 'post_data':
        return True
        #return False

    #def allow_migrate(self, db, app_label, model_name=None, **hints):
    #    if app_label == 'veggies':
    #        return db == 'posts'
    #    return 'default'
