<?php

namespace ApptDoctor;

use ApptDoctor\Loader;

class Plugin
{
	function __construct($path)
	{
		$this->path = $path;
	}

	public function run()
	{
		$this->loader = new Loader($this->path);
	}
}
