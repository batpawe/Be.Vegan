from django.contrib import admin
from .models import *

class MultiDBModelAdmin(admin.ModelAdmin):
    # A handy constant for the name of the alternate database.
    using = 'posts'

    def save_model(self, request, obj, form, change):
        # Tell Django to save objects to the 'other' database.
        print("self:")
        print(self)
        print("request:")
        print(request)
        print("obj")
        print(obj)
        print("form")
        print(form)
        print("change")
        print(change)
        obj.save(using=self.using)

    def delete_model(self, request, obj):
        print("self:")
        print(self)
        print("request:")
        print(request)
        print("obj")
        print(obj)
        # Tell Django to delete objects from the 'other' database
        obj.delete(using=self.using)

    def get_queryset(self, request):
        print("self:")
        print(self)
        print("request:")
        print(request)
        # Tell Django to look for objects on the 'other' database.
        return super().get_queryset(request).using(self.using)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        # Tell Django to populate ForeignKey widgets using a query
        # on the 'other' database.
        if db_field.name == 'author':
            db_name = 'default'
        elif db_field.name == 'id_post':
            db_name = 'posts'
        else:
            db_name = 'posts'
        return super().formfield_for_foreignkey(db_field, request, using=db_name, **kwargs)

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        # Tell Django to populate ManyToMany widgets using a query
        # on the 'other' database.
        if db_field.name == 'author':
            db_name = 'default'
        elif db_field.name == 'id_post':
            db_name = 'posts'
        else:
            db_name = 'posts'
        return super().formfield_for_manytomany(db_field, request, using=db_name, **kwargs)

admin.site.register(User)
admin.site.register(Ingredient)
admin.site.register(Recipe)
admin.site.register(Rating_Recipe)
admin.site.register(Ingredient_List)
admin.site.register(Preference)
admin.site.register(Food_To_Substitute)
admin.site.register(Food_Substitute)
admin.site.register(Restaurant)
admin.site.register(Rating_Restaurant)
admin.site.register(Report_Res)
#admin.site.register(Post, MultiDBModelAdmin)
#admin.site.register(Post_reply, MultiDBModelAdmin)
