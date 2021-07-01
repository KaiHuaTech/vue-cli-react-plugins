import Bowser from 'bowser'
const bowser = Bowser.getParser(window.navigator.userAgent);
const browser = bowser.getBrowser()
const isIE = browser.name === "Internet Explorer"

export {
  isIE
}