import{a as d,O as u}from"./index.61ce3b80.js";import{a as s}from"./axios.ab682c6b.js";import{notify as i}from"./notify.ced3f52e.js";const $={dark:{type:Boolean,default:null}};function f(t,e){return d(()=>t.dark===null?e.dark.isActive:t.dark)}let c,n=0;const r=new Array(256);for(let t=0;t<256;t++)r[t]=(t+256).toString(16).substring(1);const h=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const a=new Uint8Array(e);return t.getRandomValues(a),a}}return e=>{const a=[];for(let o=e;o>0;o--)a.push(Math.floor(Math.random()*256));return a}})(),p=4096;function w(){(c===void 0||n+16>p)&&(n=0,c=h(p));const t=Array.prototype.slice.call(c,n,n+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,r[t[0]]+r[t[1]]+r[t[2]]+r[t[3]]+"-"+r[t[4]]+r[t[5]]+"-"+r[t[6]]+r[t[7]]+"-"+r[t[8]]+r[t[9]]+"-"+r[t[10]]+r[t[11]]+r[t[12]]+r[t[13]]+r[t[14]]+r[t[15]]}const g=u("store",{state:()=>({user:"ro\xDFes",list:{items:[],showCompletedItems:!1},menu:{dishes:[],ingredients:[]},api:"https://menu-0.server.michoest.com"}),getters:{},actions:{async fetchList(){try{const t=await s.get(`${this.api}/list`);this.list=t.data}catch(t){i(`Error: ${t}`,{type:"negative"})}},async fetchMenu(){try{const t=await s.get(`${this.api}/menu`);this.menu=t.data}catch(t){i(`Error: ${t}`,{type:"negative"})}},async addItem(t){try{const e=await s.post(`${this.api}/list/item/`,t);return this.list=e.data.list,e.data.id}catch(e){return i(`Error: ${e}`,{type:"negative"}),null}},async saveItem(t){try{const e=await s.put(`${this.api}/list/item/${t.id}`,t);this.list=e.data}catch(e){i(`Error: ${e}`,{type:"negative"})}},async completeItem(t){try{const e=await s.post(`${this.api}/list/item/${t}/complete`);return this.list=e.data,!0}catch(e){i(`Error: ${e}`,{type:"negative"})}},async openItem(t){try{const e=await s.post(`${this.api}/list/item/${t}/open`);return this.list=e.data,!0}catch(e){i(`Error: ${e}`,{type:"negative"})}},async addToList(t){try{const e=await s.post(`${this.api}/menu/`,{ingredients:t});return{list:this.list,menu:this.menu}=e.data,!0}catch(e){i(`Error: ${e}`,{type:"negative"})}},async clearList(){try{const t=await s.post(`${this.api}/list/clear`);return this.list=t.data,!0}catch(t){i(`Error: ${t}`,{type:"negative"})}},async deleteCompletedItems(){try{const t=await s.delete(`${this.api}/list/delete-completed-items`);return this.list=t.data,!0}catch(t){i(`Error: ${t}`,{type:"negative"})}},async showCompletedItems(t){try{const e=await s.post(`${this.api}/list/show-completed-items/${t}`);this.list.showCompletedItems=t}catch(e){i(`Error: ${e}`,{type:"negative"})}},async editDish(t){try{const e=await s.put(`${this.api}/menu/dish/${t.id}`,t),a=this.menu.dishes.find(o=>t.id==t.id);return this.menu.dishes.splice(a,1,e.data),!0}catch(e){i(`Error: ${e}`,{type:"negative"})}},async saveVendors(t){try{const e=await s.put(`${this.api}/menu/vendors`,t);return this.menu.ingredients=e.data,!0}catch(e){i(`Error: ${e}`,{type:"negative"})}},async checkAPI(){try{return await s.get(`${this.api}/ping`),!0}catch{return!1}}}});export{g as a,$ as b,f as c,w as u};
