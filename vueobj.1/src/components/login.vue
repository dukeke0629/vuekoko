<template>
  <div id="register-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
            <a href="javascript:window.history.go(-1)"></a>
            <!-- <a href="" @click='goback'></a> -->
				<!-- <a href="" onclick="window.history.go(-1)"></a> -->
			</div>
			<span class="user-title">登录</span>
			<div class="registerBtn">
				<router-link to="/user">注册</router-link>
			</div>                                                                                                                
	    </nav>
		<div class="register-box">
			<form action="" class="am-form" id="doc-vld-msg">
				<fieldset>
				    <div class="am-form-group">
				      	<label for="doc-ipt-3" class="am-u-sm-2 j-form-label">
					    	<span class="registericon registericon-user"></span>
					  	</label>
				      	<input type="text" id="doc-vld-name-2-1" placeholder="用户名/邮箱" data-validation-message="请输入用户名或登录邮箱" required/>
				    </div>

				    <div class="am-form-group">
				      	<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="password" id="doc-vld-pwd-1" data-validation-message="请输入密码" placeholder="请输入密码" required/>
				    </div>
				    <button class="btn am-btn am-btn-secondary" type="submit">登 录</button>
				</fieldset>
			</form>
			<div class="text-right">
	            <a href="/login/forgetps" class="m-login-link">忘记密码？</a>
	        </div>	
		</div>
	</div>
  
</template>
<script>
// export default{
//   methods: {
//     goback(){
//       this.$router.go(-1)
//     }
//   }
// }
  // $(function() {
	// 	  $('#doc-vld-msg').validator({
	// 	    onValid: function(validity) {
	// 	      $(validity.field).closest('.am-form-group').find('.am-alert').hide();
	// 	    },

	// 	    onInValid: function(validity) {
	// 	      var $field = $(validity.field);
	// 	      var $group = $field.closest('.am-form-group');
	// 	      var $alert = $group.find('.am-alert');
	// 	      // 使用自定义的提示信息 或 插件内置的提示信息
	// 	      var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

	// 	      if (!$alert.length) {
	// 	        $alert = $('<div class="am-alert am-alert-danger"></div>').hide().
	// 	          appendTo($group);
	// 	      }
	// 	      $alert.html(msg).show();
	// 	    }
	// 	  });
	// 	});
</script>
<style  scoped>
#register-b .am-form input[type="text"],
#register-b .am-form input[type="url"],
#register-b .am-form input[type="email"],
#register-b .am-form input[type="password"],
#register-b .am-form input[type="tel"],
#register-b .am-form input[type="number"]{
    width: 83%;
    height: 40px;
}
.register-box{
    margin: 20px 10px;
}
#register-b .am-u-sm-10,
#register-b .am-u-sm-2{
    padding: 0;
}
#register-b .am-u-sm-2{
    height: 40px;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: normal;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #EEE;
    border: 1px solid #CCC;
    border-radius: 4px;
}
#register-b .am-u-sm-2:first-child{
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-right: 0px none;
}
#register-b .registericon{
    margin-top: 9px;
    display: block;
}
.registericon-user::after,
.registericon-email::after,
.registericon-password::after,
.registericon-password2::after{
    background-position: -321px -33px;
    content: "";
    display: inline-block;
    height: 17px;
    margin-left: 5px;
    vertical-align: -1px;
    width: 18px;
}   
.registericon-email::after { background-position: -350px -12px;} 
.registericon-password::after { background-position: -350px -33px;}  
.registericon-password2::after { background-position: -215px -33px;} 
#register-b .am-btn-secondary {
  background-color: #2ad2c9;
  width: 100%;
  border-radius: 4px;
}
#register-b .j-nav .registerBtn a{
    float: right;
    padding: 3px 20px;
    background-color: #ff585d;
    color: #fff;
    margin: 7px;
    border-radius: 4px;
}
.m-login-link:link, 
.m-login-link:visited, 
.m-login-link:hover, 
.m-login-link:active {
    display: inline-block;
    margin-top: 5px;
    margin-right: 3px;
    text-decoration: underline;
    color: #2ad2c9;
}
.input-group-btn {
  width: 27%;
}
.input-group-btn .btn{
    border-radius: 0;
    width: 27%;
    height: 40px;
    background-color: #CCC;
}
.input-group-btn .btn span{ color: #fff;}
.input-group-btn .btn span.hide { display: none ;}
/*--输入框验证提示重置--*/
#register-b .am-alert-danger {
  background-color: #FF5757;
  border-color: #FF5757;
  width: 83%;
  margin-left: 17%;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
} 
#register-b .am-field-error {
  border-color: #FF5757 !important;
}
</style>
