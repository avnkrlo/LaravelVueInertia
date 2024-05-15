<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Users/Create', [
            'users' => User::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'department' => 'required',
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email_address' => 'required|email|unique:users',
            'password' => 'required|min:8|max:16|confirmed',
        ]);

        DB::beginTransaction();
        try {
            User::create([
                'department' => $request->department,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email_address' => $request->email_address,
                'password' => Hash::make($request->password),
            ]);

            DB::commit();
            return Redirect::route('guest.index');
        }
        catch (\Exception $ex) {
            DB::rollBack();
            return Redirect::route('guest.create');
        }
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
