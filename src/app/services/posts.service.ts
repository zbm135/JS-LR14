import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PostsService extends BaseApi {

	options: HttpHeaders;

	constructor(public http: HttpClient) {
		super(http);
		this.options = new HttpHeaders();
		this.options = this.options.set('Content-Type', 'application/json');
	}

	async getPosts() {
		return this.get('posts', this.options).toPromise();
	}

	async postPost(data) {
		return this.post('posts', data, this.options).toPromise();
	}

	async putPostById(id, data) {
		console.log(data.id);
		return this.put('posts/' + data.id, data, this.options).toPromise();
	}

	async deletePostsById(id) {
		return this.delete('posts/' + id, this.options).toPromise();
	}




}
