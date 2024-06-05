import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";
import { WebLinksAddon } from "xterm-addon-web-links";

function getUrlParams(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

window.Terminal = Terminal;
window.FitAddon = FitAddon;
window.AttachAddon = AttachAddon;
window.WebLinksAddon = WebLinksAddon;
window.getUrlParams = getUrlParams;
