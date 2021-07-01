export default function download (url) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  document.body.appendChild(a);
  a.click(); // 执行下载
  // window.URL.revokeObjectURL(a.href); //释放url
  // a.setAttribute('download','excel.xls')
  document.body.removeChild(a); // 释放标签
}