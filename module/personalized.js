//推荐歌单
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const data = {
//     limit: req.query.limit || 30,
//     offset: req.query.limit || 0,
//     total: true,
//     n: 1000,
//     csrf_token: ""
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     "/weapi/personalized/playlist",
//     "POST",
//     data,
//     cookie,
//     music_req => {
//       res.send(music_req);
//     },
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data = {
        limit: query.limit || 30,
        offset: query.limit || 0,
        total: true,
        n: 1000
    }
    return request(
        'POST', `http://music.163.com/weapi/personalized/playlist`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}