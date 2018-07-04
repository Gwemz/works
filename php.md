本地服务器：wampserver  
数据库：phpmyadmin(mysql)
## php链接数据库
```
<?php
	$dbhost='localhost';
	$username='root';
	$password='';
	$dbname='test';
	$port=3306;
	$con=mysqli_connect($dbhost,$username,$password,$dbname,$port);
	mysqli_set_charset($con,"utf8");

    // 创建连接
    $conn = new mysqli($dbhost, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
?>
```

## 取数据库中的值
```
$sql = "SELECT id, name, phone FROM user";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo "<div style='line-height:45px;width:1200px;margin:0 auto;font-size:18px;'>id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["phone"]. "</div>";
    }
} else {
    echo "0 结果";
}
$conn->close();
```