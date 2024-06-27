local QBCore = exports['qb-core']:GetCoreObject()
local hunger
local thirst

AddEventHandler('QBCore:Client:OnPlayerLoaded', function()
  CreateThread(function()
    while true do
        local msec = 1000;
        local ped = PlayerPedId()
        local PlayerData = QBCore.Functions.GetPlayerData()
        hunger = PlayerData.metadata.hunger
        thirst = PlayerData.metadata.thirst
        -- SetNuiFocus(true, true)

        SendNUIMessage({
            action = "UpdateHud";
            health = GetEntityHealth(ped) - 100;
            armour = GetPedArmour(ped);
            hunger = hunger;
            thirst = thirst;
        })

        Wait(msec)
    end
  end)
end) 

CreateThread(function()
  player = PlayerPedId()
  isPedInAnyVehicle = IsPedInAnyVehicle(player)
  while (true) do
      if (player ~= PlayerPedId()) then 
          player = PlayerPedId()
      end
      if (isPedInAnyVehicle ~= IsPedInAnyVehicle(player)) then 
          isPedInAnyVehicle = IsPedInAnyVehicle(player)
      end
      DisplayRadar(isPedInAnyVehicle)
      Wait(1000)
  end
end)

-- Citizen.CreateThread(
--   function()
    
--     local minimap = RequestScaleformMovie("minimap")
--     while not HasScaleformMovieLoaded(minimap) do
--       Wait(0)
--     end

--     SetMinimapClipType(0)
    
--     SetMinimapComponentPosition('minimap', 'L', 'B', -0.015, -0.020, 0.150, 0.188888)
--     SetMinimapComponentPosition('minimap_mask', 'L', 'B', 0.01, 0.035, 0.111, 0.159)
--     SetMinimapComponentPosition('minimap_blur', 'L', 'B', -0.0405, 0.005, 0.266, 0.237)
--     -- SetMinimapComponentPosition("minimap", "L", "B", -0.0045, 0.002, 0.150, 0.188888)
--     -- SetMinimapComponentPosition("minimap_mask", "L", "B", 0.020, 0.032, 0.111, 0.159)
--     -- SetMinimapComponentPosition("minimap_blur", "L", "B", -0.03, 0.002, 0.266, 0.237)

--     SetBigmapActive(true, false)
--     Wait(1000)
--     SetBigmapActive(false, false)
--   end)
