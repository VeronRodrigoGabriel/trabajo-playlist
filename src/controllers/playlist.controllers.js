const playListCtrl = {};

playListCtrl.renderPlayList = (req,res) =>{
    res.render('playlist/playlist')
}

playListCtrl.renderCrearPlayList = (req,res) =>{
    res.render('playlist/formCrearPlayList')
}

export default playListCtrl