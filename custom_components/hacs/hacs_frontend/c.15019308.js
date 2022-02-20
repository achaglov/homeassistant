import{_ as i,H as s,e,$ as t,d as a,r as o,as as r,av as l,aw as n,n as c}from"./main-c4420e0b.js";import"./c.00409097.js";import"./c.154e2e10.js";import"./c.9f27b448.js";import"./c.0a038163.js";let h=i([c("hacs-removed-dialog")],(function(i,s){return{F:class extends s{constructor(...s){super(...s),i(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"repository",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"_updating",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.active)return t``;const i=this.hacs.removed.find(i=>i.repository===this.repository.full_name);return t`
      <hacs-dialog
        .active=${this.active}
        .hass=${this.hass}
        .title=${this.hacs.localize("entry.messages.removed_repository",{repository:this.repository.full_name})}
      >
        <div class="content">
          <div><b>${this.hacs.localize("dialog_removed.name")}:</b> ${this.repository.name}</div>
          ${i.removal_type?t` <div>
                <b>${this.hacs.localize("dialog_removed.type")}:</b> ${i.removal_type}
              </div>`:""}
          ${i.reason?t` <div>
                <b>${this.hacs.localize("dialog_removed.reason")}:</b> ${i.reason}
              </div>`:""}
          ${i.link?t`          <div>
            </b><hacs-link .url=${i.link}>${this.hacs.localize("dialog_removed.link")}</hacs-link>
          </div>`:""}
        </div>
        <mwc-button class="uninstall" slot="primaryaction" @click=${this._uninstallRepository}
          >${this._updating?t`<ha-circular-progress active size="small"></ha-circular-progress>`:this.hacs.localize("common.remove")}</mwc-button
        >
      </hacs-dialog>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return[a,o`
        .uninstall {
          --mdc-theme-primary: var(--hcv-color-error);
        }
      `]}},{kind:"method",key:"_lovelaceUrl",value:function(){var i,s;return`/hacsfiles/${null===(i=this.repository)||void 0===i?void 0:i.full_name.split("/")[1]}/${null===(s=this.repository)||void 0===s?void 0:s.file_name}`}},{kind:"method",key:"_uninstallRepository",value:async function(){if(this._updating=!0,"plugin"===this.repository.category&&this.hacs.status&&"yaml"!==this.hacs.status.lovelace_mode){(await r(this.hass)).filter(i=>i.url===this._lovelaceUrl()).forEach(i=>{l(this.hass,String(i.id))})}await n(this.hass,this.repository.id),this._updating=!1,this.active=!1}}]}}),s);export{h as HacsRemovedDialog};
