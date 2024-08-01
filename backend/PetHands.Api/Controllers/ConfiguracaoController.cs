using Microsoft.AspNetCore.Mvc;
using PetHands.AppService.Interfaces;
using System.Threading.Tasks;

namespace PetHands.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConfiguracaoController : ControllerBase
    {
        private readonly IConfiguracaoAppService _configuracaoAppService;

        public ConfiguracaoController(IConfiguracaoAppService configuracaoAppService)
        {
            _configuracaoAppService = configuracaoAppService;
        }


        [HttpGet]
        public IActionResult Get() => Ok("Hello World");


        [HttpGet("menu")]
        public async Task<IActionResult> GetMenu([FromQuery] string dominio)
        {
            if (dominio != "Menu")
            {
                return BadRequest("Par�metro 'dominio' deve ser 'Menu'.");
            }

            var json = _configuracaoAppService.GetMenu(dominio);

            if (json == null)
            {
                return NotFound("Configura��o n�o encontrada para o dom�nio fornecido.");
            }

            return Content(json, "application/json");
        }
    }
}
