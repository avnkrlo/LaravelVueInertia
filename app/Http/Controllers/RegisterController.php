<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Users/Store', [
            'users' => User::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'department' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email_address' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8|max:16'
        ]);

        try{
            $user = User::create([
                'department' => $request->department,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email_address' => $request->email_address,
                'password' => Hash::make($request->password),
            ]);

            return redirect()->route('guest.index')->with('success', 'User has been created successfully!');
        } 
        catch (\Exception $e) {
            return back()->withInput()->with('error', 'Error has occurred!' . $e->getMessage());
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
