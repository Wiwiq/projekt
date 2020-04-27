
var app = angular.module('portfolioApp', []);
app.controller('GalleryListCtrl', function($scope) {
  $scope.galleries = [
{ 'title':'Wycieczka z rodzicami',
 'when':'2010-01-04',
 'thumbnailUrl':'img/roma.jpg'
},
{ 'title':'Wycieczka z klasą',
 'when':'2011-02-05',
 'thumbnailUrl':'img/maroko.jpg'
},
{ 'title':'Wycieczka z dziewczyną',
 'when':'2012-08-08',
 'thumbnailUrl':'img/egipt.jpg'
},
{ 'title':'Miesiąc miodowy',
 'when':'2013-09-09',
 'thumbnailUrl':'img/sri.png'
},
{ 'title':'Wycieczka do rodziny',
 'when':'2014-10-11',
 'thumbnailUrl':'img/bydg.jpg'
},
{ 'title':'Obóz przetrwania',
 'when':'2016-11-22',
 'thumbnailUrl':'img/him.jpg'
},
];
$scope.section_name="Wycieczki";
$scope.ilosc = Object.keys($scope.galleries).length
$scope.today = new Date();
$scope.sortList = [
{
'label':'Alfabetycznie',
'value':'title'
},
{
'label':'Chronologicznie',
'value':'when'
}
]; 
});
