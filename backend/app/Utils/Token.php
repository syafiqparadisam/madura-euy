<?php

namespace rafi\backend\Utils;

class Token
{
	public static function create(): string
	{
		return bin2hex(random_bytes(16)) . uniqid();
	}
}