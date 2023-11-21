<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(Request $request): Response
    {
        $meta_data = 
        [
            "title"=>"YOMO | Home",
            "twitterTitle"=> "YOMO Home",
            "twitterDescription"=>"#",
            "twitterUrl"=>"#",
            "metaDescription"=>"#"
        ];
        $no_index = 0;
        $img_url = "#";
        $og_img_url = "#";
        return $this->render('pages/home.html.twig', [
            'meta_data'=>$meta_data,
            'no_index' => $no_index,
            'canonical'=>0,
            'img_url'=>$img_url,
            'og_img_url'=>$og_img_url
        ]);
    }
}
