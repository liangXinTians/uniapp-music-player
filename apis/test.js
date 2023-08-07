import request from '@/utils/request/index.js';

// 暴露方法
export function test200(data) {
    return request.request({
        url: '/get200',
        method: 'POST',
        data,
        authType: 'None',
    });
}
