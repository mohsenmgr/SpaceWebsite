<html>
 <head>
  <title>Map</title>
	 <script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script
	src="../cesium-res/Build/Cesium/Cesium.js"></script>
	<script type="text/javascript"
	src="../js/work3d.js"/>"></script>
	<script type="text/javascript"
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<script
	src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
	<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
<link rel="stylesheet"
	href="../cesium-res/Build/Cesium/Widgets/widgets.css"/>"
	<link rel="stylesheet"
	href="../css/work3d.css"/>
 </head>
 <body>
 
	<div class="main-div">
			
			<div id="cesiumContainer"></div>
		
			<script>
			    var selected_icon = '../resources/if_flame_1055059.png';
			
				var viewer = new Cesium.Viewer('cesiumContainer');
			
										var info = 'Longtitude: ' + '11.9'
								+ '<br/>' + 'Latitude: ' + '42.345'
								+ '<br/>' + 'Elevation: '
								+ '0' + '<br/>';


						var position = Cesium.Cartesian3.fromDegrees(
								'11.9', '42.345',
								'0');
								
						

						viewer.entities.add({
							id : '1',
							name : 'Fire Classified 1',
							description : info,
							position : position,
							billboard : {
								image : selected_icon,
								width : 32,
								height : 32
							},
							label : {
								text : 'Fire Detected.',
								font : '12pt monospace',
								style : Cesium.LabelStyle.FILL_AND_OUTLINE,
								outlineWidth : 2,
								verticalOrigin : Cesium.VerticalOrigin.TOP,
								pixelOffset : new Cesium.Cartesian2(0, 32)
							}
						});
			
			
			viewer.zoomTo(viewer.entities);
			
			</script>
	
	
	</div>
 
 


 </body>
</html>