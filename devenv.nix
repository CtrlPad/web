{ pkgs, lib, config, inputs, ... }:

{
   languages.javascript.enable = true;
   languages.javascript.npm.enable = true;
   languages.javascript.pnpm.enable =  true;

  packages = with pkgs; [ 
    platformio 
    figlet
    lolcat
  ];

  scripts = {
    "next:dev".exec = "pnpm run dev";
    "next:build".exec = "pnpm run build";
    "next:start".exec = "pnpm run start";
    "next:lint".exec = "pnpm run lint";
    "next:format:check".exec = "pnpm run format:check";
    "next:format".exec = "pnpm run format";
  };

  enterShell = ''
    echo
    figlet -f slant "ctrlPad" | lolcat -p 1
    echo
  '';
}
