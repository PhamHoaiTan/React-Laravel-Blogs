<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'table_blogs';
    protected $fillable = ['title', 'shortDesc', 'description', 'author'];
}
