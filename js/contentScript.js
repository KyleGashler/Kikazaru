$(function() {
    chrome.storage.sync.get(['toggle'], function(items){
        toggler = items.toggle;
       if( toggler == false){
            return;
        } else {
            filterOn();
        }
    });
    function filterOn (){
        var cuss = ["fucker","motherfucker","fuckwit","fucknut","anal","cocksucker","piss","fucksup","anus","apeshit","arsehole","ass","asshole","assmunch","autoerotic","babeland","bangbros","bareback","barenaked","bastard","bastardo","bastinado","bbw","bdsm","beaner","beaners","bestiality","bimbos","birdlock","bitch","bitches","blowjob","blumpkin","bollocks","bondage","boner","boob","boobs","bukkake","bulldyke","bullet vibe","bullshit","bung hole","bunghole","busty","butt","buttcheeks","butthole","camel toe","camgirl","camslut","camwhore","carpetmuncher","circlejerk","cleveland steamer","clit","clitoris","clover clamps","clusterfuck","cock","cocks","coprolagnia","coprophilia","cornhole","coon","coons","creampie","cum","cumming","cunnilingus","cunt","darkie","daterape","deep throat","deepthroat","dendrophilia","dick","dildo","dingleberry","dingleberries","doggiestyle","doggystyle","dolcett","domination","dominatrix","dommes","ejaculation","erotic","erotism","escort","eunuch","faggot","fecal","felch","fellatio","feltch","female squirting","femdom","figging","fingerbang","fingering","fisting","foot fetish","footjob","frotting","fuck","fuckin","fucking","fucktards","fudgepacker","futanari","genitals","goatcx","goatse","god damn","gokkun","golden shower","goodpoop","goo girl","goregasm","grope","group sex","g-spot","guro","hand job","handjob","hardcore","hentai","homoerotic","honkey","hooker","humping","incest","intercourse","jailbait","jelly donut","jigaboo","jiggaboo","jiggerboo","jizz","juggs","kike","kinbaku","kinkster","kinky","knobbing","lolita","lovemaking","masturbate","milf","motherfucker","mr hands","muff diver","muffdiving","nambla","nawashi","negro","neonazi","nigga","nigger","nig nog","nimphomania","nipple","nipples","nsfw images","nude","nudity","nympho","nymphomania","octopussy","omorashi","one cup two girls","one guy one jar","orgasm","orgy","paedophile","paki","panties","panty","pedobear","pedophile","pegging","penis","pissing","pisspig","playboy","ponyplay","poof","poon","poontang","punany","poopchute","porn","porno","pornography","pubes","pussy","queaf","queef","quim","raghead","raging boner","rape","raping","rapist","rectum","rimjob","rimming","sadism","santorum","scat","schlong","scissoring","semen","sex","sexo","sexy","shemale","shibari","shit","shitblimp","shitty","shota","shrimping","skeet","slanteye","slut","s&m","smut","snatch","snowballing","sodomize","sodomy","spic","splooge","splooge moose","spooge","spunk","strapon","strappado","strip club","style doggy","suck","sucks","swastika","swinger","threesome","throating","tight white","tit","tits","titties","titty","topless","tosser","towelhead","tranny","tribadism","tubgirl","tushy","twat","twink","twinkie","undressing","upskirt","urethra play","urophilia","vagina","venus mound","vibrator","vorarephilia","voyeur","vulva","wank","wetback","xx","xxx","yaoi","yiffy","zoophilia","🖕"];
        document.querySelectorAll('p').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('span').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('h1').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('h2').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('h3').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('h4').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('h5').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('h2').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('ul').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('li').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('ol').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('th').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('td').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('a').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('dl').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('dt').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('dd').forEach(x => cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('i').forEach(x =>  cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
        document.querySelectorAll('b').forEach(x =>  cussCompare(x.innerHTML) ? x.innerHTML = domString(x.innerHTML): true);
                        
            function cussCompare (x){
                var retVal = true;
                x.trim();
                if(typeof x != "string" || x.startsWith("<") ||  x.includes("</")){
                    retVal = false;
                }
               
                return retVal;  
            }
            function domString (x){
                var k = x.split(" ");
               // console.log(k);
                var filteredArray = k.map( function (w){
                    var regex1 = /(<([^>]+)>)/ig;
                    var regex2 = /[.,\</#!$%\^&\*;:>"{}=\-_`~()]/ig;
                    var stripedString = w.replace(regex1, "");
                    stripedString = stripedString.replace(regex2, "");
                    stripedString = stripedString.replace(regex2, "");
                    stripedString =  stripedString.replace(regex2, "");
                   
                        if(cuss.some(x => x == stripedString.toLowerCase())){
                            w = '🙉';
                        }else{
                            w = w;
                        }
                        return w;
                })
                if (filteredArray.some(x => x == '🙉')){
                    return filteredArray.join(" ");
                } else {
                    return x;
                }
            }
        }
})

   


