<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Users/Index', [
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return Inertia::render('Users/Store', [
        //     'user' => User::all()->map(function($user) {
        //         return [
        //             'id' => $user->id,
        //             'role_id' => $user->role_id,
        //             'department' => $user->department,
        //             'first_name' => $user->first_name,
        //             'middle_name' => $user->middle_name,
        //             'last_name' => $user->last_name,
        //             'email_address' => $user->email_address,
        //             'username' => $user->username,
        //             'password' => $user->password,
        //             'confirm_password' => $user->password,
        //         ];
        //     }),

        // ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
