//设置首页
exports.showIndex = function(req, res){
	
		res.render( "index.ejs", {
			"albums" : [1,2,3]
		});

}
//设置相册页 
exports.showAlbum = function(req, res){
	
		res.send( "相册" + req.params["albumname"] );

}