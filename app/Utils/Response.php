<?php
namespace rafi\backend\Utils;

class Response {
	public $statusCode;
	public $message;
	public $data;
	public function __construct(int $statusCode,string $message, $data = null) {
		$this->statusCode = $statusCode;
		$this->data = $data;
		$this->message = $message;
	}

	public function create() {
		header("Content-type: application/json");
		http_response_code($this->statusCode);
		return json_encode(["statusCode" => $this->statusCode, "data" => $this->data,"message" => $this->message]);
	}
}