'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');

class HomeController extends Controller {
  async index() {
    console.log('hello world')
    const filePath = 
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
