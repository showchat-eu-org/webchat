/* TheLounge RomaniaChat
 * https://showchat.eu.org
 * BaiatRau
 */

'use strict';

function build_embed_src() {
    // Variables
  const base_url = 'https://chat.radioclick.ro';
	const port = '9000';
	const nick = 'ShowChat??';
	const join = 'Romania,RadioClick,ShowChat';
	const realname = 'www.ShowChat.eu.org';
	const username = 'RomaniaChat';
	const leaveMessage = 'WebChat https://showchat.eu.org';
	
    // Get page URL information
    let url = new URL(window.location);
    // Construct the iframe src URL
    let src = base_url;
	if (port) {
        src += ':' + port + '/';
    }
	  if (nick) {
        src += '?' + 'nick=' + nick;
    }
	  if (join) {
        src += '&' + 'join'+ '=' + join;
    }
		if (realname) {
        src += '&' + 'realname'+ '=' + realname;
    }
		if (username) {
        src += '&' + 'username'+ '=' + username;
    }
		if (leaveMessage) {
        src += '&' + 'leaveMessage'+ '=' + leaveMessage;
    }
    return src;
}
function change_embed_dimensions() {
    let embed = document.getElementById('chat-iframe');
    embed.setAttribute('height', window.innerHeight);
    embed.setAttribute('width', window.innerWidth);
}
