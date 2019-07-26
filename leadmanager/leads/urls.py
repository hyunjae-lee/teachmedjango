from rest_framework import routers
from .api import LeadViewsSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewsSet, 'leads')

urlpatterns = router.urls
