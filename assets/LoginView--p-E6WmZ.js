import{a as c}from"./axios-nwi5g7Xq.js";import{_ as m,c as u,d as s,g as p,h as d,v as l,F as _,o as f}from"./index-g5Kq_h0t.js";var h={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_NAME:"pangpang",BASE_URL:"//",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:g}=h,w={data(){return{userInfo:{username:"",password:""}}},methods:{login(){const n=`${g}/admin/signin`;c.post(n,this.userInfo).then(e=>{const{token:r,expired:a}=e.data;document.cookie=`myToken=${r};expires=${new Date(a)};path=/`,this.$router.push("/admin/products")}).catch(e=>{alert(e.data.message)})}}},v=s("h2",null,"登入頁面",-1),I={class:"container"},b={class:"row justify-content-center"},x=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),E={class:"col-8"},V={class:"form-floating mb-3"},y=s("label",{for:"username"},"Email address",-1),P={class:"form-floating"},k=s("label",{for:"password"},"Password",-1),A=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),D=s("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1);function R(n,e,r,a,t,i){return f(),u(_,null,[v,s("div",I,[s("div",b,[x,s("div",E,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=p((...o)=>i.login&&i.login(...o),["prevent"]))},[s("div",V,[d(s("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>t.userInfo.username=o),class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[l,t.userInfo.username]]),y]),s("div",P,[d(s("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t.userInfo.password=o),class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[l,t.userInfo.password]]),k]),A],32)])]),D])],64)}const B=m(w,[["render",R]]);export{B as default};