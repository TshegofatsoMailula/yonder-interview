<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiIntergrationController extends AbstractController
{
    #[Route('/api-intergrations', name: 'app_api_intergration')]
    public function api_intergrations(Request $request): Response
    {
        $meta_data = 
        [
            "title"=>"YOMO | API Intergrations",
            "twitterTitle"=> "YOMO Intergrations",
            "twitterDescription"=>"#",
            "twitterUrl"=>"#",
            "metaDescription"=>"#"
        ];
        $no_index = 0;
        $img_url = "#";
        $og_img_url = "#";
        return $this->render('pages/api_intergrations.html.twig', [
            'meta_data'=>$meta_data,
            'no_index' => $no_index,
            'canonical'=>0,
            'img_url'=>$img_url,
            'og_img_url'=>$og_img_url
        ]);
    }
    #[Route('/our-standard-api', name: 'app_our_standard_api')]
    public function our_standard_api(Request $request): Response
    {
        $meta_data = 
        [
            "title"=>"YOMO | Our Standard API",
            "twitterTitle"=> "Our Standard API",
            "twitterDescription"=>"#",
            "twitterUrl"=>"#",
            "metaDescription"=>"#"
        ];
        $no_index = 0;
        $img_url = "#";
        $og_img_url = "#";
        
        $link = "http://yonder.tshegomailula.com/access-yomo-dashboard";
        $method = "POST";
        $headers = "Content-type : application/json";
        return $this->render('pages/standard_api.html.twig', [
            'meta_data'=>$meta_data,
            'no_index' => $no_index,
            'canonical'=>0,
            'img_url'=>$img_url,
            'og_img_url'=>$og_img_url,
            'link'=>$link,
            'method'=>$method,
            'headers'=>$headers
        ]);
    }
    #[Route('/access-yomo-dashboard', name: 'app_standard_api')]
    public function standard_api(Request $request): Response
    {
        $data = json_decode($request->getContent(),true);
        
        if(!$data)
        {
            return new JsonResponse([
                "status"=>"400",
                "statusText"=>"Bad Request"
            ]);
        }

        $auth_name = $data["auth_name"];
        $auth_code = $data["auth_code"];
        $account_status = $data["account_status"];
        if($auth_name !== 'Test User' || $auth_code !== 'Azwyx' || !$account_status)
        {
            return new JsonResponse([
                "status"=>"401",
                "statusText"=>"Unauthorized"
            ]);
        }

        return new JsonResponse([
            "status"=>"200",
            "statusText"=>"OK",
            "data"=>["name"=>"Tshego","surname"=>"Mailula"]
        ]);
    }
}
