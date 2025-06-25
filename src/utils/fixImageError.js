// 这个文件用于修复React中的Image构造函数错误
// 通过确保全局Image构造函数不被覆盖

if (typeof window !== 'undefined') {
  // 保存原始的全局Image构造函数
  window._originalImage = window.Image;
}
