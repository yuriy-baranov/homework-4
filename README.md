На основе эффекта зернистого фото из домашней работы по мультимедиа (кинотеатр), собрано приложение с фильтром для фото.

<img src="https://pp.vk.me/c637119/v637119575/13fe/OPXItwOpNOw.jpg" width="250"/>
<img src="https://pp.vk.me/c637119/v637119575/13ea/KcIFCRAbQxM.jpg" width="250"/>
<img src="https://pp.vk.me/c637119/v637119575/13f4/gLAsIbP5UI0.jpg" width="250"/>
<img src="https://pp.vk.me/c637119/v637119575/1447/JVIC5V_LXsk.jpg" width="250"/>

Используются плагины для работы с камерой, скрытия statusbar и показа splash screen.

Splash screen и иконки сгенерированы под разные разрешения с помощью [ionic generator](http://ionicframework.com/docs/cli/icon-splashscreen.html).

Для начала использования нужно сделать фото, подождать, пока оно загрузится и регулировать силу эффекта с помощью слайдера.

Дизайн слайдера в стиле IOS взят из framework7.

Проблемы,  с которыми я столкнулся:

Эффект зернистости вычисляется с помощью шейдера, но в webview эмулятора android еще не поддерживается webgl.

Проблемы с отображением фото из-за Content-Security-Policy, по умолчанию не было разрешено ставить data: или file: в img-src.