import {request} from "@/network/request";

export function getSlide(){
  return request({
    url: '/slide',
  })
}

export function getCategory(){
  return request({
    url: '/category',
  })
}

export function getParentClass(){
  return request({
    url: '/byParentClass',
  })
}
