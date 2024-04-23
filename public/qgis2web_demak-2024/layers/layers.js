var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PetaDigitalBPJSKelilingDEMAK_0 = new ol.format.GeoJSON();
var features_PetaDigitalBPJSKelilingDEMAK_0 = format_PetaDigitalBPJSKelilingDEMAK_0.readFeatures(json_PetaDigitalBPJSKelilingDEMAK_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaDigitalBPJSKelilingDEMAK_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetaDigitalBPJSKelilingDEMAK_0.addFeatures(features_PetaDigitalBPJSKelilingDEMAK_0);var lyr_PetaDigitalBPJSKelilingDEMAK_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaDigitalBPJSKelilingDEMAK_0, 
                style: style_PetaDigitalBPJSKelilingDEMAK_0,
    title: 'Peta Digital BPJS Keliling DEMAK<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_0.png" /> Bonang<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_1.png" /> Demak<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_2.png" /> Dempet<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_3.png" /> Gajah<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_4.png" /> Guntur<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_5.png" /> Karanganyar<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_6.png" /> Karangawen<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_7.png" /> Karangtengah<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_8.png" /> Kebonagung<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_9.png" /> Mijen<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_10.png" /> Mranggen<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_11.png" /> Sayung<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_12.png" /> Wedung<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_13.png" /> Wonosalam<br />\
    <img src="styles/legend/PetaDigitalBPJSKelilingDEMAK_0_14.png" /> <br />'
        });

lyr_PetaDigitalBPJSKelilingDEMAK_0.setVisible(true);
var layersList = [baseLayer,lyr_PetaDigitalBPJSKelilingDEMAK_0];
lyr_PetaDigitalBPJSKelilingDEMAK_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Jan 2023': 'Jan 2023', 'Feb 2023': 'Feb 2023', 'Mar 2023': 'Mar 2023', 'Apr 2023': 'Apr 2023', 'Mei 2023': 'Mei 2023', 'Jun 2023': 'Jun 2023', 'Jul 2023': 'Jul 2023', 'Agu 2023': 'Agu 2023', 'Sep 2023': 'Sep 2023', 'Okt 2023': 'Okt 2023', 'Nov 2023': 'Nov 2023', 'Des 2023': 'Des 2023', 'Jan 2024': 'Jan 2024', 'Feb 2024': 'Feb 2024', });
lyr_PetaDigitalBPJSKelilingDEMAK_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Jan 2023': 'TextEdit', 'Feb 2023': 'TextEdit', 'Mar 2023': 'TextEdit', 'Apr 2023': 'TextEdit', 'Mei 2023': 'TextEdit', 'Jun 2023': 'TextEdit', 'Jul 2023': 'TextEdit', 'Agu 2023': 'TextEdit', 'Sep 2023': 'TextEdit', 'Okt 2023': 'TextEdit', 'Nov 2023': 'TextEdit', 'Des 2023': 'TextEdit', 'Jan 2024': 'TextEdit', 'Feb 2024': 'TextEdit', });
lyr_PetaDigitalBPJSKelilingDEMAK_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Jan 2023': 'inline label', 'Feb 2023': 'inline label', 'Mar 2023': 'inline label', 'Apr 2023': 'inline label', 'Mei 2023': 'inline label', 'Jun 2023': 'inline label', 'Jul 2023': 'inline label', 'Agu 2023': 'inline label', 'Sep 2023': 'inline label', 'Okt 2023': 'inline label', 'Nov 2023': 'inline label', 'Des 2023': 'inline label', 'Jan 2024': 'inline label', 'Feb 2024': 'inline label', });
lyr_PetaDigitalBPJSKelilingDEMAK_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});