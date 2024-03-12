from rest_framework import permissions

class CustomReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user
    
    # 데이터에 영향을 미치지 않는 메소드(GET)의 요청은 True,
    # PUT/PATCH 같은 요청은 요청 유저와 객체의 유저가 같아야 True
    # 다른 유저가 프로필을 수정하는 경우를 막기 위함.