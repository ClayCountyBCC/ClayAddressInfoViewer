using System.Web;
using System.Web.Mvc;

namespace ClayAddressInfoViewer
{
  public class FilterConfig
  {
    public static void RegisterGlobalFilters(GlobalFilterCollection filters)
    {
      filters.Add(new HandleErrorAttribute());
    }
  }
}
