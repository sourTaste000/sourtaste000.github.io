const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};g();const v=`
apollo.svg
battlestation.svg
berry.svg
bigtime.svg
boysenberry.svg
coal.svg
cobalt.svg
commodore.svg
forestlawn.svg
frameio.svg
gameboy.svg
garden.svg
gotham.svg
haxe.svg
isotope.svg
kawaii.svg
laundry.svg
lotus.svg
mahou.svg
marble.svg
murata.svg
muzieca.svg
nightowl.svg
ninetynine.svg
noir.svg
nord.svg
obsidian.svg
op-1.svg
orca.svg
pawbin.svg
pico8.svg
polivoks.svg
rainonwires.svg
roguelight.svg
sk.svg
snow.svg
solarised.dark.svg
solarised.light.svg
sonicpi.svg
soyuz.svg
tape.svg
teenage.svg
teletext.svg
vacuui.svg
zenburn.svg
`.split(`
`),n=new Theme;n.install();n.start();const a=navigator.language||navigator.userLanguage,c=await(await fetch(`/translations/${a}.json`)).json();export{v as a,n as b,c as t};
