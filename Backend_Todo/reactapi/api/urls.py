

from django.urls import path
from . import views

urlpatterns = [
    path("todos/", views.todo_list, name="todo_list"),  # Add a trailing slash
    path("todos/<int:pk>/", views.todo_detail, name="todo_detail"),  # Add a trailing slash
]


# urls:
    # http://127.0.0.1:8000/todos
    # http://127.0.0.1:8000/todos/id