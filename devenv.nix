{ pkgs, lib, config, inputs, ... }:

{
   languages.javascript.enable = true;
   languages.javascript.npm.enable = true;
   languages.javascript.pnpm.enable =  true;
}
