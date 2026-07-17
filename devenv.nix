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
    "next:dev".exec = "pnpm next dev";
    "next:build".exec = "pnpm next build";
    "next:start".exec = "pnpm next start";
    "next:lint".exec = "pnpm eslint";
    "next:format:check".exec = "pnpm format:check";
    "next:format".exec = "pnpm format";
  };

  enterShell = ''
    echo
    figlet -f slant "ctrlPad" | lolcat -p 1
    echo
  '';
}
