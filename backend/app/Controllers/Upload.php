<?php
namespace rafi\backend\Controllers;
use rafi\backend\Core\Controller;

class Upload extends Controller {
	
	public function index()
	{
		$result = $this->model("UploadModel")->upload();
		header("Content-type: Application/json");
		echo json_encode($result);
		
	}

    public function showPromo()
    {
        $result = ['message'=>'promo showed'];
        // $result = $this->model("UploadModel")->upload();
		// header("Content-type: Application/json");
		echo json_encode($result);
    }
    public function showPopular()
    {
        $result = ['message'=>'popular showed'];
        // $result = $this->model("UploadModel")->upload();
		// header("Content-type: Application/json");
		echo json_encode($result);
    }
    public function showProductById($id)
    {
        $result = ['message'=>"product id ($id) showed"];
        // $result = $this->model("UploadModel")->upload();
		// header("Content-type: Application/json");
		echo json_encode($result);
    }

}