from django.db import models

class Item(models.Model):  # 'models, Model'을 'models.Model'로 수정
    # 여기에 필드 정의
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name