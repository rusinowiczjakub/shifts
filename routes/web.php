<?php

use App\Actions\JobBoard\Index;
use App\Actions\Shift\CreateShift;
use App\Actions\Shift\ShowApplicationDetails;
use App\Actions\Shift\ShowShiftApplications;
use App\Actions\Shift\ShowShiftList;
use App\Actions\Staff\CreateAccount;
use App\Actions\Staff\Login as LoginStaff;
use App\Actions\Staff\ProfileStepBasicInfo;
use App\Actions\Staff\ProfileStepProfessionalTypes;
use App\Actions\Staff\Register;
use App\Actions\Staff\UpdateProfessionalTypes;
use App\Actions\Staff\UpdateBasicInfo;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EmployerAccess;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\StaffAccess;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Actions\Employer;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('employer')
    ->middleware(['auth', EmployerAccess::class])
    ->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Employer/Dashboard');
        })->name('employer.dashboard');
        Route::get('/shift', ShowShiftList::class)->name('shift.list');
        Route::post('/shift', CreateShift::class)->name('shift.create');
        Route::get('/shift/{shiftId}/applications/', ShowShiftApplications::class)->name('shift.applications');
        Route::get('/shift/{shiftId}/applications/{id}', ShowApplicationDetails::class)->name('shift.applications');
        Route::get('/settings', Employer\Settings::class)->name('settings.index');
        Route::post('/settings/company', Employer\UpdateCompanyProfile::class)->name('settings.company.update');
        Route::post('/settings/address/{address}', Employer\UpdateAddress::class)->name('settings.address.update');
        Route::post('/settings/address', Employer\CreateAddress::class)->name('settings.address.create');
    });

Route::prefix('staff')
    ->name('staff.')
    ->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Staff/Dashboard');
        })->name('dashboard');
        Route::get('/login', function () {
            return Inertia::render('Staff/Login');
        })->name('login');
        Route::post('/login', LoginStaff::class)->name('login');
        Route::get('/register', Register::class)->name('register');
        Route::post('/create', CreateAccount::class)->name('account.create');
        Route::middleware(['auth', StaffAccess::class])->group(function () {
            Route::get('/onboarding/step-1', ProfileStepProfessionalTypes::class)->name('wizzard.step-1');
            Route::post('/profile/professional-types', UpdateProfessionalTypes::class)->name('profile.professional-types');
            Route::get('/onboarding/step-2', ProfileStepBasicInfo::class)->name('wizzard.step-2');
            Route::post('/profile/basic', UpdateBasicInfo::class)->name('profile.basic');
            Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        });
    });
// EMPLOYER AUTH
Route::get('employer/login', function () {
    return Inertia::render('Employer/Auth/Login');
})->name('employer.login');

Route::post('employer/login', Employer\Login::class)->name('employer.login');

Route::get('employer/register', function () {
    return Inertia::render('Employer/Auth/Register');
})->name('employer.register');

Route::post('employer/register', Employer\Register::class);
// EMPLOYER AUTH


Route::get('/', function () {
    return Inertia::render('Landing/Index');
});

Route::post('/', \App\Actions\Landing\CreateLead::class)
    ->name('landing.lead.create');



//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

require __DIR__.'/auth.php';
