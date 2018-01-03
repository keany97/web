<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="mustache.js"></script>
    <script type="text/javascript" src="archive.js"></script>
    <script type="text/javascript" src="underscore.js"></script>
  <title></title>
</head>
<body>
  <?php
    include('header.php')
  ?>

<HR><h1> Archive </h1>
<hr>
Year
<select id = "yearFilter">
  <option value="2018" id = "2018">2018</option>
  <option value="2017"  id = "2017">2017</option>
  <option value="2016"  id = "2016"  selected>2016</option>
  <option value="2015"  id = "2015">2015</option>
</select>
Team

<select  id ="teamFilter">
  <option value="England" id = "England">England</option>
  <option value="France"  id = "France">France</option>
  <option value="Ireland"  id = "Ireland">Ireland</option>
  <option value="Italy"  id = "Italy">Italy</option>
  <option value="Wales"  id = "Wales">Wales</option>
  <option value="Scotland"  id = "Scotland">Scotland</option>

</select>


<button type="button">Find!</button>


<table id="data" border = "1"></table>
</table>
<?php
    include('footer.php')
  ?>
</body>
</html>
