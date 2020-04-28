const images = {
  header: '/static/images/header.png',
  logo: '/static/images/logo.png',
  avatar: '/static/images/avatar.png'
}

const pages = {
  'user.user': require('./user/user'),
  'module.module': require('./module/module')
}

module.exports = {
  images,
  pages
}