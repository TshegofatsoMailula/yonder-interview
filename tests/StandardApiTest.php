<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class StandardApiTest extends ApiTestCase
{
   
    public function testStandardApiSuccess():void
    {
        $response = static::createClient()->request('POST', '/access-yomo-dashboard',['json'=>['auth_name'=>'Test User','auth_code'=>'Azwyx','person'=>['name'=>'Tshego']]]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['status' => '200']);
        echo "Test Passed";

    }
    public function testStandardApiFail():void
    {
        $response = static::createClient()->request('POST', '/access-yomo-dashboard',['json'=>['auth_name'=>'Test Users','auth_code'=>'Azwyx','person'=>['name'=>'Tshego']]]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['status' => '401']);
        echo "Test Passed with Unauthorized request";

    }
    public function testStandardApiEmpty():void
    {
        $response = static::createClient()->request('POST', '/access-yomo-dashboard',[]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['status' => '400']);
        echo "Test Passed with Bad Request";

    }
    public function testStandardApiSuspension():void
    {
        $response = static::createClient()->request('POST', '/access-yomo-dashboard',['json'=>['auth_name'=>'Test Users','auth_code'=>'Azwyx','person'=>['name'=>'Tshego'],"account_status"=>false]]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['status' => '401']);
        echo "Test Passed with Unauthorized request";
    }

}
