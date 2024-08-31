/* 
 * Mibbit www.showchat.eu.org by BaiatRau (mibbit)
*/

'use strict';

function build_embed_src() {
    // Variables
  const base_url = 'https://widget.mibbit.com';
	const authmethod = 'nickserv';
	const autoConnect = 'false';
	const channel = 'Romania,%23RadioClick,%23ShowChat';
	const charset = 'UTF-8'; 
	const customloading = 'Conectare'; 
	const customprompt = 'Conecteaza-te pe RomaniaChat'; 
	const debug = 'true'; 
	const nick = 'ShowChat???'; 
	const noServerMotd = 'false'; 
	const noServerNoticest = 'false'; 
	const noServerTab = 'true'; 
	const promptPass = 'true'; 
	const server = 'irc.romaniachat.eu'; 
	const settings = '23b62573c30544025b565803e2a5d358'; /* 23b62573c30544025b565803e2a5d358 - 1e8c3ad71f93d242b5307eb39859092f */
	
    // Get page URL information
    let url = new URL(window.location);
    // Construct the iframe src URL
    let src = base_url;
	if (authmethod) {
        src += '/?authmethod' + authmethod;
    }
	if (autoConnect) {
        src += '&autoConnect=' + autoConnect;
    }
	 if (channel) {
        src += '&channel=%23' + channel;
    }
	if (charset) {
        src += '&charset=' + charset;
    }
	if (customloading) {
        src += '&customloading=' + customloading;
    }
	if (customprompt) {
        src += '&customprompt=' + customprompt;
    }
	if (debug) {
        src += '&debug=' + debug;
    }
	if (nick) {
        src += '&nick=' + nick;
    }
	if (noServerMotd) {
        src += '&noServerMotd=' + noServerMotd;
    }
	if (noServerNoticest) {
        src += '&noServerNoticest=' + noServerNoticest;
    }
	if (noServerTab) {
        src += '&noServerTab=' + noServerTab;
    }
	if (promptPass) {
        src += '&promptPass=' + promptPass;
    }
	if (server) {
        src += '&server=' + server;
    }
	if (settings) {
        src += '&settings=' + settings;
    }
    return src;
}
function change_embed_dimensions() {
    let embed = document.getElementById('chat-iframe');
    embed.setAttribute('height', window.innerHeight);
    embed.setAttribute('width', window.innerWidth);
}
