<?php

namespace App\Http\Controllers;

use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TempImageController extends Controller
{
    //store
    function store(Request $request){
        //Validation
        {
            $validator = Validator::make($request->all(), [
                'image' => 'required|image'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'update image fail',
                    'errors' => $validator->errors()
                ]);
            }
    
            $image = $request->image;
            $ext = $image->getClientOriginalExtension();
            $imageName = time() . '.' . $ext;
    
            // Save to db
            $tempImage = new TempImage();
            $tempImage->name = $imageName;
            $tempImage->save();
    
            //save file to dir in public
            $image -> move(public_path('uploads/temp'));
    
    
            if ($validator->fails()) {
                return response()->json([
                    'status' => true,
                    'message' => 'update image success',
                    'image' => $tempImage,
                ]);
            }
        }

    }
}
