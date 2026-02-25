from django.forms import ModelForm
from .models import Property

class PropertyForm(ModelForm):
    class Meta:
        model = Property
        fields = ['title', 'description', 'country', 'city', 'address', 'price_per_night', 'guests', 'bathrooms', 'bedrooms', 'category', 'image']   