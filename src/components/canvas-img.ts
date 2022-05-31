import { Options } from './types';

export class CreateImg {
  el: HTMLElement;
  options: Options;
  cvs: HTMLElement | HTMLCanvasElement | null;
  ctx: HTMLSelectElement | HTMLCanvasElement | null;
  constructor(el: HTMLElement, options: Options) {
    this.el = el;
    this.options = options;
    this.cvs = null;
    this.ctx = null;
  }

  // 初始化渲染
  async init() {
    this.createCvs(this.el);
    const { bgImgUrl = '', children = [] } = this.options;
    const img = await this.loadImg(bgImgUrl);

    const { icon, text, startX, startY } = children[0];
    const iconImg = await this.loadImg(icon);
    this.drawImg(img, {
      x: 0,
      y: 0,
      width: this.cvs.width,
      height: this.cvs.height,
      text,
    });

    this.drawImg(iconImg, {
      text,
      x: startX,
      y: startY,
      width: iconImg.width,
      height: iconImg.height,
    });
    this.setText(text, iconImg.width / 2 / 2, iconImg.height * 2);
    this.handEvent();
  }

  // create cvs
  createCvs(el: HTMLSelectElement | HTMLCanvasElement) {
    if (el.tagName === 'DIV') {
      const cvs = document.createElement('canvas')!;
      cvs.width = 800;
      cvs.height = 600;
      el.appendChild(cvs);
      this.cvs = cvs;
      this.ctx = cvs.getContext('2d');
    } else {
      this.cvs = el;
      this.ctx = el.getContext('2d');
    }
  }

  // 异步加载图片
  loadImg(url: string) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
    });
  }

  // 绘制图片
  drawImg(img, obj) {
    this.ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
  }

  // 绘制背景
  drawBgColor(bgColor: string) {
    console.log(bgColor);
  }

  // 绘制文字
  setText(text: string, x, y) {
    this.ctx.font = 'normal 48pt "楷体"';
    console.log(text, x, y);
    this.ctx.strokeText(text, x, y);
  }
  // 绘制虚线 实线
  drawLine(startX, startY, lineCfg) {
    this.ctx.fillStyle = lineCfg.color;
    this.ctx.fillRect(startX, startY, lineCfg.width, lineCfg.height);
  }
  // 事件
  async handEvent() {
    const { bgImgUrl = '', children } = this.options;
    const img = await this.loadImg(bgImgUrl);
    const { icon } = children[0];
    const iconImg = await this.loadImg(icon);
    let self = this;
    this.cvs?.addEventListener('wheel', async (e) => {
      const { deltaY = 0 } = e;
      let obj = {
        x: iconImg.width / 2,
        y: iconImg.width / 2,
        width: iconImg.width / 2,
        height: iconImg.height / 2,
      };
      self.ctx.clearRect(0, 0, self.cvs?.width, self.cvs?.height);

      let obj1 = {
        x: 0,
        y: 0,
        width: self.cvs?.clientWidth,
        height: self.cvs.height,
      };
      self.drawImg(img, obj1);
      if (deltaY < 0) self.drawImg(iconImg, obj);

      // this.drawImg(text, {
      //   x: startX + 2,
      //   y: startY + 2,
      //   width: iconImg.width - 2,
      //   height: iconImg.height - 2,
      // });
    });
  }
}
