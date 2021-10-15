/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-15 17:17:05
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 19:10:19
 * @FilePath: \borderlands3-ui\.storybook\preview.js
 */
function getOrCreate(id) {
  const elementOnDom = document.getElementById(id);
  if (elementOnDom) {
    return elementOnDom;
  }

  const element = document.createElement('link');
  element.setAttribute('id', id);
  element.setAttribute('rel', 'stylesheet');
  return element;
}

function Decorator(props) {
  const { children } = props;

  function setStyles({ theme, themeName }) {
    const link = getOrCreate('custom-stylesheet');
    if (!theme) {
      link.parentNode && link.parentNode.removeChild(link);
    } else {
      console.log(theme);
      link.href = theme.css;
      children.appendChild(link);
    }
  }
  setStyles(props);

  return [children, setStyles];
}

export const parameters = {
  themes: {
    Decorator,
  }
}